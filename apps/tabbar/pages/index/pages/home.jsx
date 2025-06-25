import { Header, ScrollView, Column, Text } from '@/duxui'

export const Home = () => {
  return <>
    <Header title='首页' titleCenter />
    <ScrollView>
      <Column className='p-3 m-3 bg-white r-2' items='center'>
        <Text bold size={7}>这是首页</Text>
      </Column>
    </ScrollView>
  </>
}