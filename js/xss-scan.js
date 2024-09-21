function scanXSS() {
    const url = document.getElementById('xss-url').value;
    const resultsDiv = document.getElementById('xss-results');
    
    // Basit bir kontrol: URL'nin geçerli olup olmadığını kontrol et
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        resultsDiv.innerHTML = '<p style="color: red;">Lütfen geçerli bir URL girin!</p>';
        return;
    }

    resultsDiv.innerHTML = '<p>Taramaya başlandı...</p>';

    // Buraya XSS tarama mantığını ekleyebilirsiniz. Bu örnekte sadece bir uyarı veriliyor.
    setTimeout(() => {
        resultsDiv.innerHTML = '<p>XSS taraması tamamlandı! Sonuçları kontrol edin.</p>';
        // Buraya XSS açığı varsa sonuç ekleyebilirsiniz.
    }, 2000); // 2 saniye bekleme süresi
}
