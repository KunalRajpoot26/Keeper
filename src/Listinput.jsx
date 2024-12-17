import { useState } from "react";

const Listinput = ({ addTodo }) => {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    const handleAddTodo = () => {
        if (title.trim() !== '' && description.trim() !== '') {
            addTodo({title, description});
            setTitle('');
            setDescription('');
        }
    };

    return (
        <>
        <div className="show">
        <input 
        className="title-main"
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <input
        className="description-main"
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        </>
    );

};

export default Listinput