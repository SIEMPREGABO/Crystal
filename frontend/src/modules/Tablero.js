import React from "react";
import Column from "../kanban/components/Column";
import KanbanBoard from "../kanban/components/Kanbanboard";
import Task from "../kanban/components/Task";



export const Tablero = () => {
    return (
        <div>
            <KanbanBoard></KanbanBoard>
        </div>
    );
}

export default Tablero;