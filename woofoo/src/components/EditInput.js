import React from "react";

const EditInputs = () => {
    return (
        <div>
            <form>
                <h3>Title</h3>
                <input className='title' ></input>
                <h3>Instructions</h3>
                <input className='instructions' ></input>
                <h3>Choices</h3>
                <input className='choices'></input>
            </form>
            <button>Save Edits</button>
        </div>
    );
}

export default EditInputs;