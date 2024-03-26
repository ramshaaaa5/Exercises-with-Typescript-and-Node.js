//Question # 49. Function with Rest Parameters

function hobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => 
        {
            console.log(`I enjoy ${hobby}.`);
            
        })
    
}

hobbies("coding, reading, cooking")