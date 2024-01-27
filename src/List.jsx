

const List = () => {

    const fruits = ["apple","orange","banana","pineapple","coconut"];

    const ListItems = fruits.map(fruits => <li>{fruits}</li>)

  return(<ol>{ListItems}</ol>)
}

export default List