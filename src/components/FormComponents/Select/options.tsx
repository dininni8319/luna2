import { prices } from '@/store/reducers/initialStates'

interface IPayload {
  name: string
}

export const categoriesOption = ( categories:IPayload[]) => {
  return (
      <>
          <option value="" disabled>
              Please select
          </option>
          {categories?.map((cat: IPayload) => {
              return (
                  <option value={cat.name} key={cat.name}>{cat.name}</option>
              )
          })}
      </>
  )
}

export const priceLevel = () => {
  return (
      <>
          <option value="" disabled>
              Please select
          </option>
          {prices?.map((level: IPayload) => {
              return (
                  <option value={level.name} key={level.name}>{level.name}</option>
              )
          })}
      </>
  )
}