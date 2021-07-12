
import connectDB from '../../tools/db/connection'
import Team from '../../tools/db/Model/TeamModel'


export default async (req, res) => {
    await connectDB()
    const team = await Team.create({
        name: 'IMran Hossain',
        designation : " CEO",
        image: 'imagedsf'
    })

    res.send(team)

}
