
import React, { useState } from 'react';
export default function useForceUpdate() {
    const [_, update] = useState(false);
    return () => update((val) => !val);
}
