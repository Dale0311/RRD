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