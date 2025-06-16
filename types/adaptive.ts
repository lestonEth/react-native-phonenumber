export type LightLevel = 'dark' | 'dim' | 'bright';
export type SoundLevel = 'quiet' | 'moderate' | 'loud';
export type MotionState = 'stationary' | 'walking' | 'driving';
export type BatteryState = 'optimal' | 'low' | 'critical';

export type AdaptiveSettings = {
    colorScheme: 'light' | 'dark';
    fontSize: number;
    spacing: number;
    contrast: 'normal' | 'high';
    animations: 'full' | 'reduced' | 'none';
}

export type SensorData = {
    light: number;
    sound: number;
    motion: MotionState;
    batteryLevel: number;
}

export type AdaptationRules = {
    light: {
        dark: { threshold: number; settings: Partial<AdaptiveSettings> };
        dim: { threshold: number; settings: Partial<AdaptiveSettings> };
        bright: { settings: Partial<AdaptiveSettings> };
    };
    sound: {
        quiet: { threshold: number; settings: Partial<AdaptiveSettings> };
        moderate: { threshold: number; settings: Partial<AdaptiveSettings> };
        loud: { settings: Partial<AdaptiveSettings> };
    };
    motion: {
        stationary: { settings: Partial<AdaptiveSettings> };
        walking: { settings: Partial<AdaptiveSettings> };
        driving: { settings: Partial<AdaptiveSettings> };
    };
    battery: {
        low: { threshold: number; settings: Partial<AdaptiveSettings> };
        critical: { threshold: number; settings: Partial<AdaptiveSettings> };
        optimal: { settings: Partial<AdaptiveSettings> };
    };
}
