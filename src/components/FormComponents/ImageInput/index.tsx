import { useState, useRef, useEffect, useReducer, ChangeEvent } from 'react'
import { ImageInputStyle, Label }  from './style'
import { IAuthInput, ReducerAction } from '@/interfaces/interfaces'
import { Flex } from '@/style/globalWrapper'
import { inputReducer } from '@/store/reducers/inputReducer'

const ImageInput = (props: IAuthInput) => {
    const {
        id,
        type,
        placeholder,
        onInput,
    } = props
    const [ file, setFile ] = useState<File | null>(null)
    const [ isValid, setIsValid ] = useState(false)

    const filePickerRef = useRef<HTMLInputElement>(null)


    const pickHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let pickedFile 
        let fileIsValid = isValid
        
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0]
               if (pickedFile !== null) {
                   setFile(pickedFile)
                   setIsValid(true)
                   fileIsValid = true            
            
               }
    
        } else {
            setIsValid(false)
            fileIsValid = false            
        }
        
        pickedFile && onInput(id, pickedFile, fileIsValid) 
    }
    const initialState = {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    }

    const [inputState, dispatch] = useReducer<
        (state: typeof initialState, action: ReducerAction) => any
    >(inputReducer, initialState)

    useEffect(() => {
        if (onInput) {
            onInput(id, inputState.value, inputState.isValid)
        }
    }, [id, inputState.value, inputState.isValid])

    return (
        <Flex smdirection="column" align="start">
             <Label htmlFor={id}
             >   
              {file ? `${file.name.slice(0,16)}...`  : 'Choose a file...'}
             </Label>
             <ImageInputStyle
                ref={filePickerRef}
                forminvalid={(
                    !isValid 
                ).toString()}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={pickHandler}
            />
        </Flex>
    )
}

export default ImageInput
