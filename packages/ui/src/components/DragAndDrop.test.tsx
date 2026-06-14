import { render } from '@termuijs/jsx';
import { Draggable, Droppable } from './DragAndDrop.js';
import { describe, it, expect, vi } from 'vitest';

describe('DragAndDrop', () => {
    it('transfers the correct id from Draggable to Droppable', () => {
        const handleDrop = vi.fn();
        
        // Render a simple structure using the components directly.
        // We'll extract the onMouseDown from Draggable and onMouseUp from Droppable to simulate events.
        const draggableNode = Draggable({ id: 'item-A' });
        const droppableNode = Droppable({ id: 'zone-B', onDrop: handleDrop });

        // Simulate drag start
        if (draggableNode.props.onMouseDown) {
            draggableNode.props.onMouseDown();
        }

        // Simulate drop
        if (droppableNode.props.onMouseUp) {
            droppableNode.props.onMouseUp();
        }

        expect(handleDrop).toHaveBeenCalledWith('item-A');
    });
});
