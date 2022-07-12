AFRAME.registerComponent('video-controls', {
	
	init: function()
	{
		let video = document.querySelector("#video");

		let videoDisplay = document.querySelector("#video-display");
		let videoBorder  = document.querySelector("#video-border");
		//let videoMesh  = videoDisplay.getObject3D("mesh");
		let borderMesh = videoBorder.getObject3D("mesh");
		
		videoBorder.addEventListener("mousedown", function(event)
		{
			if ( video.paused )
			{
				video.play();
				borderMesh.material.color.set("#004400");
			}
			else
			{
				video.pause();
				borderMesh.material.color.set("#440000");
			}
		});
	}
	
});