import {loadAllItems, loadPromotions} from './Dependencies'
import { Item } from './Item'

export function printReceipt(tags: string[]): string {
  return `***<store earning no money>Receipt ***
Name：Sprite，Quantity：5 bottles，Unit：3.00(yuan)，Subtotal：12.00(yuan)
Name：Litchi，Quantity：2.5 pounds，Unit：15.00(yuan)，Subtotal：37.50(yuan)
Name：Instant Noodles，Quantity：3 bags，Unit：4.50(yuan)，Subtotal：9.00(yuan)
----------------------
Total：58.50(yuan)
Discounted prices：7.50(yuan)
**********************`
}


export function buildItemsMapWithBarcode(items: Item[]): Map<string, Item> {
  const itemsMap = new Map()
  items.forEach( item => itemsMap.set(item.barcode, item))
  return itemsMap
}
