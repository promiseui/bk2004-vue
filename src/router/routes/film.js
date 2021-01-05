import Films from '@/views/films/Index'
import NowPlaying from '@/views/films/NowPlaying'
import ComingSoon from '@/views/films/ComingSoon'
// 详情页
import Detail from '@/views/films/Detail'

var films = [
    {
        path: '/films',
        component: Films,
        children: [
            { path: 'nowPlaying', component: NowPlaying },
            { path: 'comingSoon', component: ComingSoon }
        ]
    },
    {
        path: '/film/:filmId', component: Detail
    }
]

export default films