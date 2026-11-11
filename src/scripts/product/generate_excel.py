from products_request import get_products
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.table import Table, TableStyleInfo

excelFile = Workbook()
excelProductListSheet = excelFile.create_sheet('Lista de Produtos')
products = get_products()
columnNames = list(products[0].keys())

cellBorder = Border(
  left=Side(style='thin'),
  right=Side(style='thin'),
  top=Side(style='thin'),
  bottom=Side(style='thin')
)

def titleCellsFormat(cell):
  cell.border = cellBorder
  cell.font = Font(bold=True)
  cell.fill = PatternFill(
    fill_type='solid',
    fgColor='4472C4'
  )
  cell.alignment = Alignment(
    horizontal='center',
    vertical='center'
  )

def contentCellsFormat(cell):
  cell.border = cellBorder
  cell.alignment = Alignment(
    horizontal='left', 
    vertical='bottom', 
    indent=1
  )

def getTableRef():
  firstTableCell = excelProductListSheet.cell(row=1, column=1)
  lastTableCell = excelProductListSheet.cell(
    row=len(products)+1,
    column=len(columnNames)
  )
  return f'{firstTableCell.coordinate}:{lastTableCell.coordinate}'

def getTable():
  table = Table(
    displayName='TabelaProdutos',
    ref=getTableRef()
  )
  table.tableStyleInfo = TableStyleInfo(
    name='TableStyleMedium2',
    showRowStripes=True
  )
  return table

def createTitleCells():
  for columnNum, columnName, in enumerate(columnNames, start=1):
    excelProductListSheet.row_dimensions[1].height = 23
    cell = excelProductListSheet.cell(row=1, column=columnNum)
    if(columnName == 'unitOfMeasure'):
      columnName = 'unit of measure'
    cell.value = columnName
    titleCellsFormat(cell)

def createValueCells():
  for productRow, product in enumerate(products, start=1):
    excelProductListSheet.row_dimensions[productRow+1].height = 23
    for i, columnName in enumerate(columnNames, start=1):
      excelProductListSheet.column_dimensions[get_column_letter(i)].width = 15
      cellValue = product[columnName]
      cell = excelProductListSheet.cell(row=productRow+1, column=i)
      cell.value = cellValue
      contentCellsFormat(cell)

createTitleCells()
createValueCells()
excelProductListSheet.add_table(getTable())
excelFile.save('produtos.xlsx')