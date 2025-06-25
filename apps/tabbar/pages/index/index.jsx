import { TopView } from '@/duxui'
import { TabBar } from '@/{{name}}'

import { Home, User } from './pages'

import home from './icons/home.png'
import homes from './icons/homes.png'
import user from './icons/user.png'
import users from './icons/users.png'

const pages = [
  {
    comp: Home,
    type: 'Home',
    image: home,
    imageHover: homes,
    name: '首页'
  },
  {
    comp: User,
    type: 'User',
    image: user,
    imageHover: users,
    name: '我的'
  }
]

const TabBarIcon = ({
  hover,
  index
}) => {
  const item = pages[index]
  return <TabBar.ItemIcon
    hover={hover}
    name={item.name}
    image={item.image}
    imageHover={item.imageHover}
    // 在创建项目后建议替换成图标组件，这样可以适应主题变化
    // icon={<ExpIcon
    //   name={item.icon}
    //   size={52}
    //   className={hover ? 'text-primary' : 'text-c1'}
    // />}
  />
}

export default TopView.page(function Index() {

  return <TabBar>
    {
      pages.map(item => <TabBar.Item key={item.type} itemKey={item.type} component={item.comp} icon={TabBarIcon} />)
    }
  </TabBar>
}, { isSafe: true })
