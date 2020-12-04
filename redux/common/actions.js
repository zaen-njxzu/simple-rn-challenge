
export const INCREASE_COUNTER = 'common/increase_counter';
export const DECREASE_COUNTER = 'common/decrease_counter';

// List Common Action

export const increaseCounter = () => {
    return { type: INCREASE_COUNTER }
}

export const decreaseCounter = () => {
    return { type: DECREASE_COUNTER }
}