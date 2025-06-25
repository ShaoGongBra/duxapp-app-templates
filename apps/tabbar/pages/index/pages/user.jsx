import { Header, ScrollView, Column, Text } from '@/duxui'

export const User = () => {
  return <>
    <Header title='个人中心' titleCenter />
    <ScrollView>
      <Column className='p-3 m-3 bg-white r-2' items='center'>
        <Text bold size={7}>这是个人中心</Text>
      </Column>
    </ScrollView>
  </>
}