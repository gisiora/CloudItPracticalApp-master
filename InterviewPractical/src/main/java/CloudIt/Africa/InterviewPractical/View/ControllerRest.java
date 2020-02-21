package CloudIt.Africa.InterviewPractical.View;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRest {

	
	@RequestMapping("/UserUpdate/{userId}")
	public User getUserProfilePage(@PathVariable("userId") Integer userId, @RequestBody User user) {
		DataRepository datarepo=new DataRepository();
		User usernew =datarepo.getUser(userId);
		
		return usernew;
	}

}
