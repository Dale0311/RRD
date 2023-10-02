React Router Dom

link: https://bespoke-griffin-2cd366.netlify.app

#### creating and using route param

1. in a Route path we just add a :id <- variable
2. A Link To(this is a prop) 1, 2 or anything really.
3. inside of the Route's component:
   - use useParam(rrd custom hook)
   - assign it to a variable.
   - const id = useParam() <- you can add param inside e.g (id)

### creating a Router that support data apis

1. imports: RouterProvider, createBrowserRouter(fn), createRoutesFromElements(optional)
2. createBrowserRouter - accepts a child route it can be a a array of object or from createRoutesFromElements
   syntax:
   const router = createBrowserRouter(
   [
   {
   path: "/",
   element: < Root />,
   childer: [{ ... }]
   }
   ]
   )
   <br>
   or
   <br>
   const router = createBrowserRouter(createRoutesFromElements(< Router path="/" element={< Home />}/>))

3. RouterProvider - it can be a self closing tag or not.
   syntax:
   < RouterProvider router={router}/>

### creating a loader to fetch data.

1. create a generic fetch/axios request
2. create a loader fn(typically @component where want our data)
   note: we can get params using argument
   e.g: loader({params})
3. import the loader fn to the parent component
4. pass a prop called loader that takes the imported loader fn
5. @component that needed the data, import useLoaderData from rrd
6. instantiate a variable from useLoaderData.

<b>syntax to 5-6:</b>
import {useLoaderData} from "react-router-dom"
const data = useLoaderData();

### creating an error handler in createBrowserRouter

1. create a component that render whenever error occured
2. create a errorElement prop to any of the route inside the router
3. @error component import useRouteError and instantiate a variable
4. display error

### action

- it is the "writes" to route loader "gets"
- normally in action fn, we use try catch block

### Forms in rrd

- keeps track of all the inputs and typically sends it to a action fn

props:

1. replace - to remove the login in the history stack

- types of redirecting:

1. @fn
   redirect
   useNavigate
1. @component
   Navigate
   Redirect

### useNavigation

- useNavigation is use when we perform action and loader
- we can catch the state of our action/loader

#### steps on creating a redirectTo @login component

1. pass a request to a requireAuth
2. @requiredAuth get the url
   syntax: const url = new URL(request.url).pathname;
3. @login action/loader create a redirect
   syntax: const url = new URL(request.url).searchParams.get("redirectTo") || '/'

docs: https://scrimba.com/learn/reactrouter6/redirectto-in-vanlife-co5cc482e8e3d88fc08865c34

### deferred data - is use when a fetch req in loader is slow

- immidiately render the ui but not the data.
- we can put some loading component and what not when the data is not ready

- <b>keywords</b>

1. defer - allows me to remove the async await in the loader fn and returns a promise instead
   syntax: <br> const users = getUsers() <br> return defer({users})

2. Await - a component that render whenever the data is ready
   props:

- resolve(loaderData)
  children:
- a callback fn

* that takes the resolve as parameter
* and do a logic inside it

3. Suspense - lets you display a fallback until its children have finished loading.
   it is coming from REACT not rrd
   props:
1. fallback - component that is rendered when the data still loads

### notes:

1. always insantiate new URL when dealing with query string/search params
   syntax: const url = new URL(request.url)

2. render props - a child that doesn't neccesary a jsx component

# IMPORTANT: issue with redirect

- it says on the yt that im following is that mirageJS(current api) and react router dom doesn't work well together soo yeaaaaaaa.
