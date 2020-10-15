import React, {Component}from 'react';
import { ContentBox } from '../index'

class ListBox extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }

  }

  onClickItem = (index) => {
    const openItemsCopy = openItems.concat([]);

    let i = openItemsCopy.indexOf(index);
    if (i > -1) {
      openItemsCopy.splice(i, 1)
    } else {
      openItemsCopy.push(index);
    }
    setOpenItems(openItemsCopy)
  }


  render () {
    const {data, isFirstOpen, className} = props;
    const [openItems, setOpenItems] = this.state
    return (
      <ContentBox className={className}>
        {
          (data || []).length === 0 ? <Empty/> : null
        }
        {
          (data || []).map((item, index) => {
            return (
              <DataItem
                onClick={() => {
                  this.onClickItem(index)
                }}
                active={(index === 0 && isFirstOpen) ? true : openItems.indexOf(index) > -1}
                data={item}
                isLink={(index === 0 && isFirstOpen) ? false : true}
              />
            )
          })
        }

      </ContentBox>
    );
  }
}

export default ListBox