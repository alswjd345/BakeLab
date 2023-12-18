fetch('/orderList')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // JSON 데이터로 변환
    })
    .then(data => {
        console.log('안녕')
        // 데이터를 사용하는 로직을 여기에 작성
        console.log(data); // 응답 데이터를 콘솔에 출력하거나 다른 작업을 수행할 수 있습니다.
    })
    .catch(error => {
        console.error('Error:', error);
    });