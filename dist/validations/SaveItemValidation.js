"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveItemValidation = void 0;
class SaveItemValidation {
    validate(req, res, next) {
        const { body } = req;
        if (Object.keys(body).length != 3)
            return res.status(400).json({ message: 'Campo incorreto' });
        if (!body.input || !Array.isArray(body.input))
            return res.status(400).json({ message: 'Está faltando input' });
        if (!body.name || typeof body.name !== 'string')
            return res.status(400).json({ message: 'Valor de name não é uma String' });
        if (!body.output || typeof body.output !== 'number')
            return res.status(400).json({ message: 'Está faltando output:Number' });
        let isIncorrect = false;
        body.input.forEach((ell) => {
            if (!ell.name || !ell.amount || typeof ell.name != 'string' || typeof ell.amount != 'number' || Object.keys(ell).length != 2)
                return isIncorrect = true;
        });
        if (isIncorrect)
            return res.status(400).json({ message: 'Algum objeto do input está incorreto' });
        return next();
    }
}
exports.SaveItemValidation = SaveItemValidation;
//# sourceMappingURL=SaveItemValidation.js.map