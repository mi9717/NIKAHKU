/**
 * Romantic Music Synthesizer for Wedding Invitation
 * Uses Web Audio API to create a gentle, warm, romantic music box / acoustic chime melody.
 * Safe from CORS issues and broken external MP3 links.
 */

class RomanticSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private masterGain: GainNode | null = null;

  // Romantic Pentatonic/Major Chord sequence (Canon in D / Wedding mood: D - A - Bm - F#m - G - D - G - A)
  private melodyNotes = [
    587.33, 659.25, 739.99, 880.00, // D5, E5, F#5, A5
    587.33, 739.99, 880.00, 987.77, // D5, F#5, A5, B5
    523.25, 659.25, 783.99, 880.00, // C5, E5, G5, A5
    440.00, 587.33, 739.99, 880.00, // A4, D5, F#5, A5
    493.88, 587.33, 739.99, 987.77, // B4, D5, F#5, B5
    392.00, 493.88, 587.33, 783.99, // G4, B4, D5, G5
    440.00, 554.37, 659.25, 880.00, // A4, C#5, E5, A5
    587.33, 739.99, 880.00, 1174.66 // D5, F#5, A5, D6
  ];
  private currentStep = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime); // Soft romantic volume
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playChime(freq: number, duration = 1.2) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Warm bell/celesta sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Add subtle harmonic
    const oscHarmonic = this.ctx.createOscillator();
    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(freq * 2, now);

    const harmonicGain = this.ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.08, now);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.7);

    // Envelope
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.18, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscHarmonic.connect(harmonicGain);
    harmonicGain.connect(noteGain);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(now);
    oscHarmonic.start(now);

    osc.stop(now + duration);
    oscHarmonic.stop(now + duration);
  }

  start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const stepDuration = 480; // ms per note

    const scheduleNext = () => {
      if (!this.isPlaying) return;
      const freq = this.melodyNotes[this.currentStep % this.melodyNotes.length];
      this.playChime(freq, 1.4);

      // Play soft bass root on beat 0
      if (this.currentStep % 4 === 0 && this.ctx) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = 'sine';
        bassOsc.frequency.setValueAtTime(freq / 4, this.ctx.currentTime);
        bassGain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        bassGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.8);
        bassOsc.connect(bassGain);
        if (this.masterGain) bassGain.connect(this.masterGain);
        bassOsc.start();
        bassOsc.stop(this.ctx.currentTime + 1.8);
      }

      this.currentStep = (this.currentStep + 1) % this.melodyNotes.length;
      this.timer = window.setTimeout(scheduleNext, stepDuration);
    };

    scheduleNext();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  getStatus(): boolean {
    return this.isPlaying;
  }
}

export const romanticAudio = new RomanticSynthesizer();
