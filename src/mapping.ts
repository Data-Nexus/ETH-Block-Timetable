import { ethereum } from '@graphprotocol/graph-ts'
import { fiveMinBlock, hourBlock, dayBlock, weekBlock } from "../generated/schema"

export function handleBlock(block: ethereum.Block): void {
  
  // Create and Maintain Five Min Block
  const fiveMin = block.timestamp.toI32() / 300 
  const unixFiveMin = fiveMin * 300
  let FiveMinBlockId = unixFiveMin.toString()
  
  let fiveMinBlockEntity = fiveMinBlock.load(FiveMinBlockId)

  if (!fiveMinBlockEntity) {
    fiveMinBlockEntity                 = new fiveMinBlock(FiveMinBlockId)
    fiveMinBlockEntity.fiveMin            = unixFiveMin
    fiveMinBlockEntity.startBlockNum   = block.number    
  }
  
  fiveMinBlockEntity.endBlockNum       = block.number 
  fiveMinBlockEntity.save()
  // Five Min Block End

  // Create and Maintain Hour Block
  const hour = block.timestamp.toI32() / 3600 
  const unixHour = hour * 3600
  let hourBlockId = hour.toString()
  
  let hourBlockEntity = hourBlock.load(hourBlockId)

  if (!hourBlockEntity) {
    hourBlockEntity                 = new hourBlock(hourBlockId)
    hourBlockEntity.hour            = unixHour
    hourBlockEntity.startBlockNum   = block.number    
  }
  
  hourBlockEntity.endBlockNum       = block.number 
  hourBlockEntity.save()
  // Hour Block End

  // Create and Maintain Day Block
  const day = block.timestamp.toI32() / 86400 
  const unixDay = day * 86400
  let dayBlockId = day.toString()

  let dayBlockEntity = dayBlock.load(dayBlockId)

  if (!dayBlockEntity) {
    dayBlockEntity                 = new dayBlock(dayBlockId)
    dayBlockEntity.day             = unixDay
    dayBlockEntity.startBlockNum   = block.number    
  }
  
  dayBlockEntity.endBlockNum       = block.number 
  dayBlockEntity.save()
  // Day Block End

  // Create and Maintain Week Block
  const week = block.timestamp.toI32() / 604800
  const unixWeek = week * 604800
  let weekBlockId = week.toString()

  let weekBlockEntity = weekBlock.load(weekBlockId)

  if (!weekBlockEntity) {
    weekBlockEntity                 = new weekBlock(weekBlockId)
    weekBlockEntity.week            = unixWeek
    weekBlockEntity.startBlockNum   = block.number    
  }
  
  weekBlockEntity.endBlockNum       = block.number 
  weekBlockEntity.save()
  //Week Block End

}