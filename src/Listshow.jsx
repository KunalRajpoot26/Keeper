import './Listshow.css';

// eslint-disable-next-line react/prop-types
const Listshow = ({ todos }) => {
    if (!todos || todos.length === 0) {
        
        return <p className="pre">No data to display!</p>;
    }

    function deleteTodo(id) {
        todos([...todos].filter(todo => todo.id !== (id)));
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <div className="title" > 
                    <h1>{todo.title}</h1>
                    <button type='delete' onClick={() => deleteTodo(todo.id) }>Delete</button>
                    </div>
                    <div className="description">
                    <p>{todo.description}</p>
                    </div>
                    </div>
            ))}
        </div>
    );
};

export default Listshow;
