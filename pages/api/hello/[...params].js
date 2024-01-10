import apidata from '../../../components/data'

export default function handler(req, res) {
  const {
    query: {params: [id, item]}
  } = req
  
  // let id = req.query.params["id"]
  // let item = req.query.params.item

  // if (id == undefined) {
  //   id = 0
  // }
  // if (id == '') {
  //   id = 0
  // }
  // if (id < 0) {
  //   id = 0
  // }
  // if (id >= apidata.length) {
  //   id = 0
  // }

  // if (item != "name" && item != "mail" && item != "age") {
  //   item = "name"
  // }

  const result = {id: id, item: apidata[id][item]}
  res.json(result)
}