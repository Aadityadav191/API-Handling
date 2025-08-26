# Methods(library) for form validation
     1.Basic State management
     2.React Final Form
     3.Formik with yup
     4.React Hook Form

# method to fetch API in React js
     1.Fetch
     2.Axios Library
     3.fetch API/ Axios with async or wait
     4.SWR
     5.React Query

# Methods to post Data to API
     1.Using Fetch
     2.using AXIOS
     3.Using React Query
     4.Redux with think or saga







# API FETCHING IN REACT (POST Request)

API is the Application Programming Interface based on the request response cycle. we can fetch an API with multiple methods.
Some are:-

# 1. USING AXIOS :
        function fetchUsersWithAxios()
        {
            return axios.get(apiUrl)
            .then(response => 
             {
              return response.data;
             })
            .catch(error => 
             {
              throw error;
             });
        }



# 2. USING ASYNC/AWAIT:

          async function fetchUsersWithAsyncAwait() 
            {
               try
                 {
                  const data = await fetch(apiUrl)
                  const response = await data.json()
                  return response
                  } 
               catch (error)   
                {
                throw error
                }
             }



# 3.USING PROMISES:

       function fetchUsersWithPromises()
         {
           fetch(api)
           .then((response) => 
              {
               return response.json()
              })
            .then((data) => 
              {
               console.log(data)
              })
         }


# ----------------Summary-----------------

A Promise = “Something that will happen later.”

 # It can end in:
      Resolved (fulfilled) → success 🎉
      Rejected → error ❌
# We handle results using .then() / .catch() or async/await.

----------------------------------------------------
# asynchronous functions always return a Promise

# async → Marks a function as asynchronous (it will return a Promise).
# await → Says: “⏳ Wait here until the Promise is finished, then give me the result.”

// fetch returns a Promise → we use await here
// response.json() also returns a Promise → we use await again