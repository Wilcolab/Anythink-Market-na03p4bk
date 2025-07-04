async function testAPI() {
    try {
        // Test GET /tasks
        console.log('Testing GET /tasks...');
        const getResponse = await fetch('http://localhost:8001/tasks');
        const getTasks = await getResponse.json();
        console.log('Current tasks:', getTasks);
        
        // Test POST /tasks
        console.log('\nTesting POST /tasks...');
        const postResponse = await fetch('http://localhost:8001/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: 'New task from test script' })
        });
        const postResult = await postResponse.json();
        console.log('POST response:', postResult);
        
        // Test GET /tasks again to see if the new task was added
        console.log('\nTesting GET /tasks again...');
        const getResponse2 = await fetch('http://localhost:8001/tasks');
        const getTasks2 = await getResponse2.json();
        console.log('Updated tasks:', getTasks2);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

testAPI();