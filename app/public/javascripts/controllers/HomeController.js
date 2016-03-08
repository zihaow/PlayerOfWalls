app.controller('HomeController',['$scope', '$http', '$timeout','Upload', function($scope, $http, $timeout, Upload){
	
	$scope.showConsole = false;

	//get all students on start.
	$http.get('/student').then(function(res){
		$scope.students = res.data;
	}).catch(function(err){
		console.log("path not found");
	});

	// insert a new student.
	$scope.submit = function(name, id) {
		
		var new_student = {
			"name":name,
			"ID":id
		};
		var data = JSON.stringify(new_student);
		
		// post a new student.
		$http({
			method:'POST',
			url: '/student',
			data: data,
			headers: {'Content-Type': 'application/json'}
		}).success(function(res){
			$scope.students.push(new_student);
		}).catch(function(err){
			console.log("Fail to insert a student.");
		});
	};

	// delete a student.
	$scope.delete = function(name, id) {
		var student = {
			"name":name,
			"ID":id
		};
		var data = JSON.stringify(student);
		
		// delete a student.
		$http({
			method:'DELETE',
			url: '/student',
			data: data,
			headers: {'Content-Type': 'application/json'}
		}).success(function(res){
			var index = 0;
			for(var i=0;i<$scope.students.length;i++){
				if($scope.students[i].ID === id){
					index = i;
					$scope.students.splice(index,1);
				}
			}
		}).catch(function(err){
			console.log("Fail to delete a student.");
		});
	};

	// remove all images for this student/player.
	$scope.removeAllImages = function(){
		var allImages = $scope.thisStudent;
		var student, i=0;
		for(i=0;i<allImages.length;i++){
			student = {
				"name":$scope.student_name,
				"ID":$scope.student_id,
				"image_url":allImages[i].image_url,
				"image_id":allImages[i].image_id
			};
			deleteImage(student);
		}
	};

	// delete a particular image as specified by the user.
	$scope.deleteThisImage = function(image){
		var student = {
			"name":$scope.student_name,
			"ID":$scope.student_id,
			"image_url":image.image_url,
			"image_id":image.image_id
		};
		
		// call this function to delete a image.
		deleteImage(student);
	};

	// function to call server side to delete images.
	function deleteImage(data){
		var image_id_is = data.image_id;
		data = JSON.stringify(data);
		$http({
			method:'DELETE',
			url: '/delete_image',
			data: data,
			headers: {'Content-Type': 'application/json'}
		}).success(function(res){
			// delete this particular image from front-end.
			var index = 0;
			for(var i=0;i<$scope.thisStudent.length;i++){
				if($scope.thisStudent[i].image_id === image_id_is){
					index = i;
					$scope.thisStudent.splice(index,1);
				}
			}
		}).catch(function(err){
			console.log("Fail to delete this image.");
		});
	}

	// show a particular student/player.
	$scope.showThisStudent = function(name, id){
		$scope.student_name = name;
		$scope.student_id = id;
		$scope.showConsole = true;

		// get this student info on user select.
		$http({
    	url: '/student_one', 
    	method: "GET",
    	params: {
    						name: name,
    						id:id
    					}
 		}).then(function(res){
 			var thisStudentImages = res.data.images;
 			var nonEmptyResult = [];
 			for(var i=0; i<thisStudentImages.length;i++){
 				if(thisStudentImages[i].image_url !== "" && thisStudentImages[i].image_url !== null)
 					nonEmptyResult.push(thisStudentImages[i]);
 			}
 			$scope.thisStudent = nonEmptyResult;
 		}).catch(function(err){
 			console.log("Error getting this student.");
 		});
	};

	// upload a file locally.
	$scope.uploadFiles = function(file) {
    $scope.f = file;
  };

  // upload image either via url or local directory.
	$scope.uploadImage = function(url) {
		// upload via local file uploads.
		if($scope.f !== undefined) {
			$scope.f.upload = Upload.upload({
                url: '/upload_image',
                data: {
                			file: $scope.f,
                			name:$scope.student_name,
											id:$scope.student_id
											}
      });
		}	

		// upload via url.
		if (url !== undefined) {
			var URL = {
				url:url,
				name:$scope.student_name,
				id:$scope.student_id
			};
			var data = JSON.stringify(URL);
			$http({
				method:'POST',
				url: '/upload_image_url',
		    data: data,
				headers: {'Content-Type': 'application/json'}
			}).success(function(res){
				var thisStudentImages = $scope.thisStudent;
				thisStudentImages.push(res);
				$scope.thisStudent = thisStudentImages;
				// empty the URL input box.
				$scope.image_url = "";
			}).catch(function(err){
				console.log("error uploaded images");
			});
		}
	};
}]);