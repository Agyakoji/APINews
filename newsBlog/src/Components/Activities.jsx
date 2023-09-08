import { useEffect, useState } from "react";

const Activities = () => {

    const loadActivity = () => {
        setIsLoading(true)
            fetch("https://jsonplaceholder.typicode.com/posts")  //https://catfact.ninja/fact, https://official-joke-api.appspot.com/random_joke
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // setIsLoading(false)
            });  
    }
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {loadActivity()}, [])

    if(activities.length == 0){
        return <p>Loading...</p>
    }

    return (  
        <div>
           <ul>
                {activities.map((activity) => {
                    return <li key={activity.key}>{activity.fact}</li>
                })}
           </ul>
            <button disabled={isLoading} onClick={loadActivity}>Load more</button>
        </div>
    );
}
 
export default Activities;