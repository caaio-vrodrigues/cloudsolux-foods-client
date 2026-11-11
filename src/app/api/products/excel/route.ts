import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import fs from 'fs'

const execAsync = promisify(exec)

export async function POST(): Promise<Response> {
  try {
    const pythonFile = path.join(
      process.cwd(),
      'src',
      'scripts',
      'product',
      'generate_excel.py'
    )
    await execAsync(`python "${pythonFile}"`);

    const excelPath = path.join(
      process.cwd(),
      'produtos.xlsx'
    )
    const excel = fs.readFileSync(excelPath);
    
    return new Response(excel, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="products.xlsx"',
      },
    })
  } 
  catch (error) {
    console.error(error);
    return Response.json(
      { error: 'Erro ao gerar planilha.' },
      { status: 500 }
    )
  }
}