import React from 'react'
import { Card } from '../../modules/card'
import { Pagination } from '../../modules/Pagination'
import { Filter } from '../../modules/filter/Filter'

export const Main = () => {
  return (
    <>
    <Filter/>
    <Card/>
    <Pagination/>
    </>
  )
}
