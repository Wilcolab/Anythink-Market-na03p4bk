async function testAPI() {
    try {
        const response = await fetch('http://localhost:8001/tasks');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

testAPI();