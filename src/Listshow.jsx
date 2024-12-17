import './Listshow.css';

// eslint-disable-next-line react/prop-types
const Listshow = ({ todos }) => {
    if (!todos || todos.length === 0) {
        
        return <p className="pre">No data to display!</p>;
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <div className="title" > 
                    <h1>{todo.title}</h1>
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
