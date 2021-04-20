import { useState, useEffect, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { changeText } from '../../store/text/textSlice'
import ContentBox from './ContentBox'

const Home: FC = () => {
    const [loaded, setLoaded] = useState(false)
    
    const reduxText = useAppSelector((state) => state.text.value)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setLoaded(true)
        dispatch(changeText("Test text changed using dispatched action."))

        return () => {
            setLoaded(false)
        }
    }, [dispatch])

    return(
        <div>
            {/* Prop example with TypeScript */}
            <ContentBox 
                title={"Welcome to my Boilerplate"}
                content={"This is a boilerplate of all of the dependencies I use when starting a new React project."}
            />

            {/* Example Redux Output */}
            <p>{reduxText}</p>

            {/* Example for useState and useEffect */}
            <p>Load state: {loaded && "Loaded"}</p>
        </div>
    )
}

export default Home;