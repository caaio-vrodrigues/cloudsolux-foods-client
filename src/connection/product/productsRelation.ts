export const generateExcelProductsRelation = async (): Promise<void> => {
  try {
    const response = await fetch('/api/products/excel', {
      method: 'POST',
    })
    if(!response.ok)
      throw new Error('Erro ao gerar planilha.');
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'products.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(url);
  } 
  catch (error) {
    console.error(error);
  }
};