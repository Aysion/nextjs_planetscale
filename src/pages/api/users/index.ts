import { NextApiRequest, NextApiResponse } from "next"
import { getUsers, setUsers } from "../../../lib/users"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req

	switch (method) {
		case 'GET':
			return res.status(200).json({ data: await getUsers() })
		case 'POST':
			const { name } = req.body

			const user = await setUsers({
				data: {
					name,
				}
			})

			return res.status(201).json({ data: user })
		default:
			break;
	}
}
