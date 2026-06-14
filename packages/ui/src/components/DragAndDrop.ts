import { createElement } from '@termuijs/jsx';
import type { VNode } from '@termuijs/jsx';

export interface DraggableProps {
    id: string;
    onDragStart?: () => void;
    children?: VNode | VNode[];
}

let currentlyDraggedId: string | null = null;

export function Draggable({ id, onDragStart, children }: DraggableProps) {
    return createElement(
        'box',
        {
            onMouseDown: () => {
                currentlyDraggedId = id;
                if (onDragStart) onDragStart();
            }
        },
        children
    );
}

export interface DroppableProps {
    id: string;
    onDrop?: (draggedId: string) => void;
    children?: VNode | VNode[];
}

export function Droppable({ id, onDrop, children }: DroppableProps) {
    return createElement(
        'box',
        {
            onMouseUp: () => {
                if (onDrop && currentlyDraggedId !== null) {
                    onDrop(currentlyDraggedId);
                }
                currentlyDraggedId = null; // Reset after drop
            }
        },
        children
    );
}
