package CloudIt.Africa.InterviewPractical.View;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllView {

	@RequestMapping("/Login")
	public String getLoginPage() {
		return "login";
	}

	@RequestMapping("/Dashboard")
	public String getDashboardPage(Model model) {
		displayData(model);
		return "dashboard";
	}

	@RequestMapping("/Users")
	public String getUsersPage(Model model) {
		displayData(model);
		DataRepository data = new DataRepository();
		model.addAttribute("usersList", data.getAllUsers());
		return "users";
	}

	@RequestMapping("/UserProfile/{userId}")
	public String getUserProfilePage(@PathVariable("userId") Integer userId, Model model) {
		displayData(model);
		DataRepository data = new DataRepository();
		model.addAttribute("User", data.getUser(userId));
		return "userprofile";
	}

	@RequestMapping("/CreateUser")
	public String getCreateUserPage(Model model) {
		displayData(model);
		return "usercreate";
	}
	
	public void displayData(Model model) {
		model.addAttribute("username", "John Doe");
		model.addAttribute("email", "JohnDoe@gamil.com");
		model.addAttribute("role", "Admin");
	}
}
