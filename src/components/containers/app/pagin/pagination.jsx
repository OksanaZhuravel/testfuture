import React, { useState, useCallback } from 'react';

export default function Pagination({ increacePagination }) {
 
    const [value, setValue] = useState('');
    const handleChange = useCallback((e) => {
        setValue( );
    }, []);


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        increacePagination (value);
        setValue(' ');
    }, [increacePagination, value]);
    return (
        <form onSubmit={handleSubmit}>
            <input className="input" placeholder="Ввведите свое сообщение" type="text" onChange={handleChange} value={value} />
            <button className="button">Ввод</button>
        </form>
    )
}