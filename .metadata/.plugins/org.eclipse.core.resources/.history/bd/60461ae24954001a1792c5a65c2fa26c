package CloudIt.Africa.InterviewPractical.View;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DataRepository {

	public List<User> getAllUsers() {
		List<User> userList = new ArrayList<User>();
		userList.add(new User(0, "Zainabu Abdallah Hussein", "hussein@gmail.com", "071234567", "Finance",
				getDateString("2019-12-10")));
		userList.add(new User(1, "Fred Okengo Matiang", "fred@gmail.com", "07823456", "Marketing",
				getDateString("2019-11-02")));
		userList.add(new User(2, "Patrick Ole Ntutu", "patrick@gmail.com", "07526457", "catering",
				getDateString("2010-12-10")));
		userList.add(
				new User(3, "Karanja Kibicho", "kibicho@gmail.com", "070234867", "Sales", getDateString("2020-02-12")));
		userList.add(new User(4, "John Doe", "johndoe@gmail.com", "071234567", "IT", getDateString("2020-02-26")));
		userList.add(new User(5, "Gordon Kihalangwa", "kihalangwa@gmail.com", "07272335", "Human Resource",
				getDateString("2020-01-01")));
		userList.add(
				new User(6, "Torome Saitoti", "saitoti@gmail.com", "07323507", "Legal", getDateString("2019-10-10")));
		userList.add(
				new User(7, "Charles Keter", "keter@gmail.com", "071334967", "Finance", getDateString("2019-11-10")));
		userList.add(
				new User(8, "Joe Mucheru", "mucheru@gmail.com", "07413456", "Marketing", getDateString("2019-10-02")));
		userList.add(
				new User(9, "Peter Munya", "munya@gmail.com", "07552457", "catering", getDateString("2010-12-10")));
		userList.add(
				new User(10, "Margaret Kobia", "kobia@gmail.com", "076934867", "Sales", getDateString("2020-02-12")));
		userList.add(new User(11, "Mutahi Kagwe", "kagwe@gmail.com", "077239567", "IT", getDateString("2020-02-24")));
		userList.add(new User(12, "Betty Maina", "maina@gmail.com", "078792335", "Human Resource",
				getDateString("2020-01-01")));
		userList.add(
				new User(13, "Keriako Tobiko", "tobiko@gmail.com", "079323507", "Legal", getDateString("2019-09-10")));
		userList.add(
				new User(14, "Brian Kamau", "kamau@gmail.com", "070334967", "Finance", getDateString("2019-11-10")));

		return userList;
	}

	public User getUser(Integer id) {
		List<User> userList = getAllUsers();
		for (int a = 0; a < userList.size(); a++) {
			User user = userList.get(a);
			if (user.getId() == id) {
				return user;
			}
		}
		return null;
	}
	
	

	public Date getDateString(String date) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			Date newDate = simpleDateFormat.parse(date);
			return newDate;
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
