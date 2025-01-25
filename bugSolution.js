```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); // Log the count after every render 
    return () => {
      // Cleanup function (optional)
      console.log('Component unmounted');
    };
  }, [count]); // This effect only runs if count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```