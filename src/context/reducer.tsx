import { Todo } from '../components/model';

export type Action =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }
  | { type: 'done'; payload: number }
  | { type: 'edit'; payload: { id: number; description: string } };

export const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'add':
      return [
        { id: Date.now(), description: action.payload, isDone: false },
        ...state,
      ];

    case 'remove':
      return state.filter((item) => item.id !== action.payload);

    case 'done':
      return state
        .map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        )
        .sort((a, b) => +a.isDone - +b.isDone);

    case 'edit':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, description: action.payload.description }
          : item
      );

    default:
      return state;
  }
};
