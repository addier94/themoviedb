import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from 'features/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const appDispatch = () => useDispatch<AppDispatch>();
export const appSelector: TypedUseSelectorHook<RootState> = useSelector;
