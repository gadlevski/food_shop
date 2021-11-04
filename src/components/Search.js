import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <>
      <InputGroup className='my-3'>
        <FormControl
          id='search-field'
          placeholder='search'
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          aria-label='Username'
          aria-describedby='basic-addon1'
        />
        <Button onClick={handleSubmit}>Поиск</Button>
      </InputGroup>
    </>
  );
}

export default Search;
