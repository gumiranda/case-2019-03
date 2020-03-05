
require("../models/consulta-model");
const base = require("../bin/base/repository-base");
class consultaRepository {
  constructor() {
    this._base = new base("Consulta");
    }
  async create(data) {
    let consultaCreated = await this._base.create(data);
    return this._base.getById(consultaCreated._id);
  }
  async update(id, data) {
   let consultaUpdated = await this._base._model.update(id,data);
   if(consultaUpdated){
     return await this._base.getById(id);
   } else {
     return { message: `Update failed` }
   }
  }
  async getAll() {
    return await this._base._model.find().populate({ path: 'paciente', select: 'name' }).populate({ path: 'medico', select: 'name' });
  }
  async getById(id) {
    return await this._base.getById(id);
  }
  async getMy(id,type) {
    if(type == 'medico'){
      return await this._base._model.find({ medico: id }).populate({ path: 'paciente', select: 'name' });
    } else {
      return await this._base._model.find({ paciente: id }).populate({ path: 'medico', select: 'name' });;
    }
  }
  async delete(id) {
    return await this._base.delete(id);
  }
}

module.exports = consultaRepository;