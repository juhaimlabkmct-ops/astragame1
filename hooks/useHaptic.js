import { useCallback } from 'react';

export default function useHaptic() {
    const triggerHaptic = useCallback((pattern = 10) => {
        if (typeof window !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }, []);

    return { triggerHaptic };
}
