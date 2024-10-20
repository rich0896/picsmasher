// __tests__/effectManager.test.js

import { EffectManager, InvertEffect } from '../effects.js';

describe('EffectManager', () => {
    let effectManager;

    beforeEach(() => {
        effectManager = new EffectManager();
    });

    test('should register effects correctly', () => {
        effectManager.registerEffect('invert', InvertEffect);
        expect(effectManager.effectsRegistry).toHaveProperty('invert');
    });

    test('should create effect instances correctly', () => {
        effectManager.registerEffect('invert', InvertEffect);
        const effect = effectManager.createEffect('invert', { intensity: 100 });
        expect(effect).toBeInstanceOf(InvertEffect);
    });
});
